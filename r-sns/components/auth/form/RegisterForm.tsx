import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { OAuthButton } from "../oauth/OAuthButton";

import { ResponsiveDialog } from "@/components/pop_up";
import formSchema from "./validation_rule";
import type FormProps from "./form_props";

type RegisterFormProps = FormProps;

function RegisterForm({ open, onOpenChange }: RegisterFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const postData = {
      email: values.email?.trim(),
      password: values.password?.trim(),
    };

    console.log("Submitting Signup Data:", postData);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (res.ok) {
      window.location.reload();
      console.log("Signup Success");
    } else {
      const data = await res.json();
      console.log("Signup Failed:", data);
    }
  };

  return (
    <ResponsiveDialog
      title="アカウントを作成する"
      open={open}
      onOpenChange={onOpenChange}
    >
      <div className="flex flex-col p-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 m-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label
                    htmlFor="email"
                    className="font-medium text-secondary-foreground"
                  >
                    E-mail
                  </Label>
                  <FormControl>
                    <Input id="email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Label
                    htmlFor="password"
                    className="font-medium text-secondary-foreground"
                  >
                    Password
                  </Label>
                  <FormControl>
                    <Input id="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* TODO: 認証エラー時の表示を書く */}
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "送信中..." : "送信"}
            </Button>
          </form>
        </Form>

        <div className="relative flex items-center my-4">
          <div className="flex-grow border-t border-border"></div>
          <span className="px-4 text-secondary-foreground text-sm">または</span>
          <div className="flex-grow border-t border-border"></div>
        </div>

        <div className="flex flex-col justify-center gap-2 m-2">
          <OAuthButton
            logo="/oauth_logo/google.svg"
            alt="Google"
            apiUrl="/api/auth/google"
            text="Google で続行"
          />
          <OAuthButton
            logo="/oauth_logo/github.svg"
            alt="GitHub"
            apiUrl="/api/auth/github"
            text="GitHub で続行"
          />
        </div>
      </div>
    </ResponsiveDialog>
  );
}

export default RegisterForm;
