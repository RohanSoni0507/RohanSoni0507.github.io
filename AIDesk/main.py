import webbrowser

def main():
    while True:
        command = input("Enter a voice command: ").lower()

        if "open youtube" in command:
            webbrowser.open("https://www.youtube.com/")
        elif "open google" in command:
            webbrowser.open("https://www.google.com/")
        elif "open stack overflow" in command:
            webbrowser.open("https://stackoverflow.com/")
        elif "tell me the time" in command:
            import datetime
            current_time = datetime.datetime.now().strftime("%H:%M:%S")
            print(f"Current time is {current_time}")
        else:
            print("Command not recognized.")

if __name__ == "__main__":
    main()
