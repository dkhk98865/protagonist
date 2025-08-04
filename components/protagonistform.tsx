"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { minLength, z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants"

const formSchema = z.object({
    name: z.string().min(1, { message: 'Protagonist is required.'}),
    voice: z.string().min(1, { message: 'Voice is required.'}),
    style: z.string().min(1, { message: 'Style is required.'}),
    duration: z.number().min(1, { message: 'Duration is required.'}),
})

const ProtagonistForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: " ",
            voice: " ", 
            style: " ",
            duration: 15,
        },
    })
 
    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
    console.log(values)
    }

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Protagonist Name</FormLabel>
                <FormControl>
                    <Input 
                        placeholder="Enter the fairy tale character of your choice" {...field}
                        className="" 
                    />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="voice"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Voice</FormLabel>
                <FormControl>
                    <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                    >
                        <SelectTrigger className="input">
                            <SelectValue placeholder="Select the voice" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="male">
                                Male
                            </SelectItem>
                            <SelectItem value="female">
                                Female
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Style</FormLabel>
                <FormControl>
                    <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                    >
                        <SelectTrigger className="input">
                            <SelectValue placeholder="Select the voice" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="formal">
                                Formal
                            </SelectItem>
                            <SelectItem value="casual">
                                Casual
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Estimated session duration in minutes</FormLabel>
                <FormControl>
                    <Input
                        type="number" 
                        placeholder="15"
                        { ... field }
                        className="input" 
                    />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit" className="w-full cursor-pointer">Build Your Protagonist</Button>
        </form>
        </Form>
    )
}

export default ProtagonistForm