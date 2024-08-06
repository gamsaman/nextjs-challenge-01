"use server";

export async function handleForm(prevState: any, formData: FormData) {
  if (formData.get("password") === "12345") {
    return {
      success: "Welcome Back!",
    };
  } else {
    return {
      error: "Wrong Password",
    };
  }
}
