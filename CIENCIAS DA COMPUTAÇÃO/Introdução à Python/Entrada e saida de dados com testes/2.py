def imprimir_escada_invertida(word):
    for i in (len(word), 0, -1):
        print(word[: i])


def main():
    word = input("digite alguma coisa")
    imprimir_escada_invertida(word)


if __name__ == "main":
    main()
