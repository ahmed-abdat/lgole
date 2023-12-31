import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Selecte from "./Select"
import { useState } from "react"

const FormSchema = z.object({
  phone: z.string().refine((value) => /^\d{8}$/.test(value), {
    message: "رقم الهاتف يجب أن يكون 8 أرقام",
  }),
  amount: z.string().refine((value) => +value >= 100 && +value <= 10000, {
    message: "المبلغ يجب أن يكون بين 100 و 10000",
  }),
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
      amount: '',
    },
  })
  const [selected, setSelected] = useState("bankily")

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data, selected);
    // localStorage.setItem("formData", JSON.stringify({...data , selected}));
    toast(`app ${selected} amount ${data.amount} phone ${data.phone}`)

  }

  
  return (
    <Form {...form}>
      <Toaster />
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="rtl">
              <FormLabel>
                رقم الهاتف
              </FormLabel>
              <section className="flex flex-row gap-1">
                <FormControl>
                  <Input placeholder="أدخل رقم هاتف المرسل" {...field} />
                </FormControl>
                <Selecte setSelected={setSelected} />
              </section>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="rtl">
              <FormLabel>
                المبلغ
              </FormLabel>
              <FormControl>
                <Input placeholder="أدخل المبلغ المراد إرساله" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full min-h-11 text-xl bg-purple-600">
          التالي
        </Button>
      </form>
    </Form>
  )
}
