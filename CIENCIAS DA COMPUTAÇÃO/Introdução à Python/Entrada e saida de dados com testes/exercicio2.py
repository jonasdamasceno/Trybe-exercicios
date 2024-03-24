# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária
# tenha que adivinhar uma palavra que será mostrada com as embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente
# O jogador terá três tentativas para adivinhar a palavra. Ao
# final, a palavra deve ser mostrada na tela, informando se
# a pessoa ganhou ou perdeu o jogo
import random

WORDS = [
    "excretor",
    "pronador",
    "halógeno",
    "ocultado",
    "traquin"
]


def adivinha_palavra(word):
    random_word = random.choice(word)
    scramble_word = "".join(random.sample(random_word, len(random_word)))
    return random_word, scramble_word


def tentativa_usuario():
    guesses = []
    for attempt in range(3):
        guess = input("digite aqui a sua palavra")
        guesses.append(guess)
    return guesses


def verifica_resultado(secret_word, guesses):
    if secret_word in guesses:
        print(f"você venceu a palavra é {secret_word}")
    else:
        print(f"você perdeu a palavra é: {secret_word}")


if __name__ == "_main_":
    secret_word, scramble_word = draw_secret_word(WORDS)
    print(f"Scramble_word is: {secret_word}")
    guesses = collect_guesses()
    check_game_result(secret_word, guesses)
