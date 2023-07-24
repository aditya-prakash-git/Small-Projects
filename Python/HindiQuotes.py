import random

hindi_quotes = [
    "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    "विद्या ददाति विनयं।",
    "सत्यमेव जयते।",
    "धर्मो रक्षति रक्षितः।",
    "प्रकृतिः पुरुषस्य भोज्यं।",
    "विद्या विनये शोभते।",
    "अहिंसा परमो धर्मः।",
    "स्वयं चरेद्यदि दोषं भवेत् पापं च दोषः।",
    "समयः शत्रुः।",
    "अभयं सर्वदा दत्त्वा सर्वदा भयवर्जितः।",
]

def generate_random_hindi_quote():
    return random.choice(hindi_quotes)

if __name__ == "__main__":
    print("Random Hindi Quote Generator")
    while True:
        input("Press Enter to get a random Hindi quote or 'q' to quit: ")
        quote = generate_random_hindi_quote()
        print(quote)
