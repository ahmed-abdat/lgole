import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Selecte from "./Select";
import { useState } from "react";

const FormSchema = z.object({
  phone: z.string().refine((value) => /^\d{8}$/.test(value), {
    message: "رقم الهاتف يجب أن يكون 8 أرقام",
  }),
  amount: z.string().refine((value) => +value >= 100 && +value <= 10000, {
    message: "المبلغ يجب أن يكون بين 100 و 10000",
  }),
  receiverPhone: z.string().refine((value) => /^\d{8}$/.test(value), {
    message: "رقم الهاتف يجب أن يكون 8 أرقام",
  }),
  amountAfterTaxes: z.string(),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
      amount: "",
      receiverPhone: "",
      amountAfterTaxes: "0",
    },
  });

  // ! state
  const [senderPlatform, setSenderPlatform] = useState("bankily");
  const [receiverPlatform, setReciverPlatform] = useState("masrivy");
  const [taxes, setTaxes] = useState(0);

  const calculateTaxes = () => {
    const amount = +form.getValues("amount");

    const taxes = calculateAmount(amount);
    setTaxes(taxes);

    if (taxes > 0) {
      const finalAmount = (amount - taxes).toFixed(1);
      form.setValue("amountAfterTaxes", finalAmount);
    } else {
      form.setValue("amountAfterTaxes", `${amount}`);
    }
  };

  const calculateAmount = (amount: number) => {
    if (amount < 100) {
      return 0;
    } else if (typeof amount === "number" && amount >= 100 && amount <= 2000) {
      return 20;
    } else if (amount > 2000 && amount <= 4000) {
      return 30;
    } else if (amount > 4000 && amount <= 8000) {
      return 40;
    } else if (amount > 8000 && amount <= 12000) {
      return 50;
    } else if (amount > 12000 && amount <= 16000) {
      return 60;
    } else if (amount > 16000 && amount <= 20000) {
      return 70;
    } else if (amount > 20000 && amount <= 24000) {
      return 80;
    } else if (amount > 24000 && amount <= 28000) {
      return 90;
    } else if (amount > 28000 && amount <= 32000) {
      return 100;
    } else if (amount > 32000 && amount <= 36000) {
      return 110;
    } else if (amount > 36000 && amount <= 40000) {
      return 120;
    } else if (amount > 40000 && amount <= 44000) {
      return 130;
    } else if (amount > 44000 && amount <= 48000) {
      return 140;
    } else if (amount > 48000 && amount <= 52000) {
      return 150;
    } else if (amount > 52000 && amount <= 56000) {
      return 160;
    } else if (amount > 56000 && amount <= 60000) {
      return 170;
    } else if (amount > 60000 && amount <= 64000) {
      return 180;
    } else if (amount > 64000 && amount <= 68000) {
      return 190;
    } else if (amount > 68000 && amount <= 72000) {
      return 200;
    } else if (amount > 72000 && amount <= 76000) {
      return 210;
    } else if (amount > 76000 && amount <= 80000) {
      return 220;
    } else if (amount > 80000 && amount <= 84000) {
      return 230;
    } else if (amount > 84000 && amount <= 88000) {
      return 240;
    } else if (amount > 88000 && amount <= 92000) {
      return 250;
    } else if (amount > 92000 && amount <= 96000) {
      return 260;
    } else if (amount > 96000 && amount <= 100000) {
      return 270;
    } else {
      return NaN;
    }
  };

  // set the amount after taxes to the form

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const allData = { ...data, senderPlatform, receiverPlatform , taxes };
    console.log(allData);
    // localStorage.setItem("formData", JSON.stringify({...data , senderPlatform}));
    toast(
      `receiver platform is ${receiverPlatform} and receiver phone is ${data.receiverPhone}`
    );
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
              <FormLabel className="text-lg">رقم الهاتف</FormLabel>
              <section className="flex flex-row gap-1">
                <FormControl>
                  <Input
                    className="h-10"
                    placeholder="أدخل رقم هاتف المرسل"
                    type = "number"
                    {...field}
                  />
                </FormControl>
                <Selecte setSelected={setSenderPlatform} state="bankily" />
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
              <FormLabel className="text-lg">المبلغ</FormLabel>
              <FormControl onChange={calculateTaxes}>
                <Input
                type="number"
                className="h-10"
                  placeholder="أدخل المبلغ المراد إرساله"
                  {...field}
                  maxLength={5}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* taxes */}
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg">الرسوم</span>
          <span className="text-base text-gray-500">{taxes.toFixed(2)}</span>
        </div>
        <FormField
          control={form.control}
          name="amountAfterTaxes"
          render={({ field }) => (
            <FormItem className="rtl">
              <FormLabel className="text-lg">المبلغ بعد الرسوم</FormLabel>
              <FormControl onChange={calculateTaxes}>
                <Input {...field} disabled  className="bg-gray-200 text-base h-10"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="receiverPhone"
          render={({ field }) => (
            <FormItem className="rtl">
              <FormLabel className="text-lg">رقم هاتف المتلقي</FormLabel>
              <section className="flex flex-row gap-1">
                <FormControl>
                  <Input placeholder="أدخل رقم هاتف المتلقي" {...field} type= 'number' className="h-10"/>
                </FormControl>
                <Selecte setSelected={setReciverPlatform} state="masrivy" />
              </section>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button  type="submit" className="w-full min-h-11 text-xl bg-purple-600 hover:bg-purple-700">
          التالي
        </Button>
      </form>
    </Form>
  );
}
