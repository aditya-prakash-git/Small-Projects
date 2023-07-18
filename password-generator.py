import random
import string

def generate_password(length):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for _ in range(length))
    return password

def main():
    print("Welcome to the Password Generator by Aditya!")
    while True:
        try:
            password_length = int(input("Please enter the length of the password you want to generate: "))
            password = generate_password(password_length)
            print("\nGenerated Password:", password)
            choice = input("\nDo you want to generate another password? (y/n): ")
            if choice.lower() != "y":
                break
        except ValueError:
            print("Invalid input. Please enter a valid integer length.")
    
    print("\nThank you for using my Password Generator!")

if __name__ == "__main__":
    main()
