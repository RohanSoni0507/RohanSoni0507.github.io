import webbrowser
import datetime
import speech_recognition as sr
import requests
import json

def main():
    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)

    try:
        command = recognizer.recognize_google(audio).lower()
        print(f"You said: {command}")

        if "open youtube" in command:
            webbrowser.open("https://www.youtube.com/")
        elif "open google" in command:
            webbrowser.open("https://www.google.com/")
        elif "open stack overflow" in command:
            webbrowser.open("https://stackoverflow.com/")
        elif "check weather" in command:
            get_weather()
        elif "check news" in command:
            get_news()
        elif "calculate" in command:
            expression = command.replace("calculate", "").strip()
            evaluate_math_expression(expression)
        else:
            print("Command not recognized.")

    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand audio.")
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")

def get_weather():
    city = "Chengalpattu"
    api_key = "9eb0b841a2d427a6474c6f015b18bfea"
    weather_url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"

    response = requests.get(weather_url)
    data = response.json()

    if data["cod"] == 200:
        weather_description = data["weather"][0]["description"]
        temperature = round(data["main"]["temp"] - 273.15, 2)  # Convert temperature to Celsius
        print(f"The weather in {city} is currently {weather_description} with a temperature of {temperature}°C.")
    else:
        print("Unable to fetch weather information. Please try again.")

def get_news():
    country = "in"
    api_key = "22782790a3864020b16621912d5ef144"
    news_source = "bbc-news"
    news_url = f"https://newsapi.org/v2/top-headlines?country={country}&apiKey={api_key}"

    response = requests.get(news_url)
    data = response.json()

    if data["status"] == "ok" and data["articles"]:
        news_articles = data["articles"]
        print("Here are the latest news updates:")
        for index, article in enumerate(news_articles, start=1):
            print(f"{index}. {article['title']}")
    else:
        print("Unable to fetch news updates. Please try again.")

def evaluate_math_expression(expression):
    try:
        result = eval(expression)
        print(f"Result: {result}")
    except Exception as e:
        print(f"Math expression evaluation error: {e}")
        print("Invalid math expression. Please try again.")

if __name__ == "__main__":
    while True:
        main()
