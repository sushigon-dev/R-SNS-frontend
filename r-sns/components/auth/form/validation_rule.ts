import * as z from "zod";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .max(255, "メールアドレスは255文字以内で入力してください")
    .email("正しいメールアドレスの形式で入力してください"),

  password: z
    .string()
    .min(1, "パスワードを入力してください")
    .min(8, "パスワードは8文字以上で入力してください")
    .max(128, "パスワードは128文字以内で入力してください")
    .regex(/[A-Z]/, "パスワードには大文字を1文字以上含めてください")
    .regex(/[a-z]/, "パスワードには小文字を1文字以上含めてください")
    .regex(/[0-9]/, "パスワードには数字を1文字以上含めてください")
    .regex(/[^A-Za-z0-9]/, "パスワードには記号を1文字以上含めてください"),
});

export default formSchema;
