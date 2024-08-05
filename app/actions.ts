"use server";

export async function handleForm(prevState: any, formData: FormData) {
  if (formData.get("password") === "12345") {
    return {
      message: "Logined!",
    };
  } else {
    return {
      message: "wrong password",
    };
  }
}
