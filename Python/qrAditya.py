import qrcode

def generate_qr_code(text, file_name):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(text)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(file_name)

if __name__ == "__main__":
    #you may write any message to be shown after scanning the QR
    name = "Aditya loves you and you should definitely CALL him" 
    file_name = f"{name}_qr_code.png"
    generate_qr_code(name, file_name)
    print(f"QR code for '{name}' has been generated and saved as '{file_name}'.")
