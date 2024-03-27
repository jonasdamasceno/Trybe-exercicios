import json
import csv


def retrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in books["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories += 1
    return categories


def calc_portcent_of_books_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_cvs_report(file, header, rows):
    write = csv.writer(file)
    write.writerow(header)
    write.writerows(rows)


if __name__ == "__main__":
    with open("books.json") as file:
        books = retrieve_books(file)

book_count_by_category = count_books_by_categories(books)
number_of_books = len(books)
books_porcent_rows = calc_portcent_of_books_by_category(
    book_count_by_category, number_of_books)

header = ["categories, porcentagem"]
with open("report.csv", "w") as file:
    write_cvs_report(file, header, books_porcent_rows)
