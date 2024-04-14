"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { GigSchema } from "../../schema/index"

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

import { addGig } from "@/store/actions/gig.actions"

export function GigNewEdit() {


  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(GigSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: ''
    },
  });


  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log('submitted:', values)
    addGig(values)
  }


  return (
    <section className="gig-new-edit-container mt-8">
      <div>hi</div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-4 m-10 border">
          <div className="flex w-full flex-col gap-8">

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gig title</FormLabel>
                  <FormControl>
                    <Input placeholder="I will..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Write something about what you can do best
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    Choose the category that most suitable for your Gig.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="searchTags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Search Tags</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter search terms you feel your buyers will use when looking for your service.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="100" />
                  </FormControl>
                  <FormDescription>
                    Give a price that is both reasonable and competitive.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="daysToMake"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Days To Make</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="3" />
                  </FormControl>
                  <FormDescription>
                    How long would it take you to deliver the work?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="I will..." />
                  </FormControl>
                  <FormDescription>
                    Describe what you would like to achieve with your Gig.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>
          <div className="btn-container w-full flex justify-end">
            <Button type="submit">Save & Continue</Button>
          </div>

        </form>

      </Form>

    </section>
  )
}
