import random

def get_user_name():
    name = input("What is your name? ")
    return name

def play_game():
    name = get_user_name()
    print("Hello,", name + "!")

    play_option = input("Are you sure you want to play? (yes/no) ")
    if play_option.lower() == "yes":
        print("Let's start the math game!")
        score = 0

        for _ in range(5):
            num1 = random.randint(1, 10)
            num2 = random.randint(1, 10)
            operator = random.choice(['+', '-', '*'])
            question = f"What is {num1} {operator} {num2}? "
            user_answer = input(question)
            correct_answer = str(eval(f"{num1}{operator}{num2}"))

            if user_answer == correct_answer:
                print("Correct!")
                score += 1
            else:
                print("Incorrect!")

        print("Game Over!")
        print("Your score:", score)

        if score < 4:
            print("We are watching you!")
        else:
            print("Congratulations! You win!")
    else:
        print("Okay, maybe next time.")

if __name__ == "__main__":
    play_game()
