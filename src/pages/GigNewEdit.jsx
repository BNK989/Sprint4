"use client"
import { useEffect, useState } from "react"

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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



import { addGig } from "@/store/actions/gig.actions"

import {gigService} from '@/services/gig.service.local'
import { data } from "autoprefixer"
import { ImgUploader } from "@/cmps/ImgUploader"
import { Link } from "react-router-dom"

export function GigNewEdit() {

  const form = useForm({
    resolver: zodResolver(GigSchema),
    defaultValues: {
      title: '',
      category: '',
      searchTags: [],
      price: 0,
      daysToMake: 0,
      description: '',
      imgUrl: ''
    }
  })

  function onSubmit(values) {
    // Do something with the form values.
    console.log('submitted:', values)
    values.tags = values.searchTags.split(',')
    values.avgResponseTime = 8
    values.imgUrls = [values.imgUrl]
    values.loc = 'Gambia'
    values.reviews = []
    addGig(values)
  }

  let [categories, setCategories] = useState([])

  useEffect(() => {
    gigService.allCategories()
    .then(data => setCategories(data))
    
  }, [])

  function onUploaded(imgUrl) {
    console.log('imgUrl:', imgUrl)
    form.setValue('imgUrl', imgUrl)
}



  return (
    <section className="gig-new-edit-container mt-8">
      <h2 className="text-center mt-3">Create a new Gig</h2>
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
                    {/* <Select >
                      <SelectTrigger className="w-96">
                        <SelectValue placeholder="Select one"  />
                      </SelectTrigger>
                      <SelectContent >
                        {categories.map((category,i) => (
                          <SelectItem key={i} value={category} >{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select> */}
                    <Input placeholder="category" {...field} />

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
                    <Input {...field} placeholder="tag1, tag2, tag3" />
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
                    <Input type="number" {...field} placeholder="100" />
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
                    <Input type="number" {...field} placeholder="3" />
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
                    {/* <Input {...field} placeholder="I will..." /> */}
                    <Textarea {...field} placeholder="I will..." />
                  </FormControl>
                  <FormDescription>
                    Describe what you would like to achieve with your Gig.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="imgUrls"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <Input {...field} type="file" />
                  </FormControl>
                  <FormDescription>
                    Add a picture that will sell your work.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

          <ImgUploader onUploaded={onUploaded} />

          </div>
          <div className="btn-container w-full flex justify-end">
          
           {/* <Link to={`user/:userId${gig._id}`}> */}
             <Button type="submit">Save & Continue</Button>
             {/* </Link> */}
          </div>

        </form>

      </Form>

    </section>
  )
}
