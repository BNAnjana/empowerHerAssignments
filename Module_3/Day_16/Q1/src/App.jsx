import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  })

  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData)
  }

  const images = [
    {
      id: "img1",
      src: "https://via.placeholder.com/400x250?text=Image+1",
      label: "Image 1",
    },
    {
      id: "img2",
      src: "https://via.placeholder.com/400x250?text=Image+2",
      label: "Image 2",
    },
    {
      id: "img3",
      src: "https://via.placeholder.com/400x250?text=Image+3",
      label: "Image 3",
    },
  ]

  const [activeTab, setActiveTab] = useState(images[0].id)

  const currentIndex = images.findIndex(
    (img) => img.id === activeTab
  )

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setActiveTab(images[nextIndex].id)
  }

  const prevImage = () => {
    const prevIndex =
      currentIndex === 0
        ? images.length - 1
        : currentIndex - 1
    setActiveTab(images[prevIndex].id)
  }

  const [todoText, setTodoText] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (todoText.trim() === "") return

    setTodos([
      ...todos,
      { id: Date.now(), text: todoText, completed: false },
    ])
    setTodoText("")
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  return (
    <>
    <div className="flex justify-center mt-10">
      <Card className="w-full m-4 max-w-sm">
        <CardHeader>
          <CardTitle>Feedback Form App</CardTitle>
          <CardDescription>
            Enter your Details and Feedback below
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea
                id="feedback"
                value={formData.feedback}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      </div>
      {/* Display submitted data */}
      {submittedData && (
        <Card className="w-full m-4 max-w-sm">
          <CardHeader>
            <CardTitle>Submitted Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Feedback:</strong> {submittedData.feedback}</p>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-center mt-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Image Slideshow App</CardTitle>
        </CardHeader>

        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Tabs */}
            <TabsList className="grid grid-cols-3 mb-4">
              {images.map((img) => (
                <TabsTrigger key={img.id} value={img.id}>
                  {img.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content */}
            {images.map((img) => (
              <TabsContent
                key={img.id}
                value={img.id}
                className="flex justify-center"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="rounded-lg"
                />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>

        {/* Next / Previous Buttons */}
        <CardFooter className="flex justify-between">
          <Button onClick={prevImage}>Previous</Button>
          <Button onClick={nextImage}>Next</Button>
        </CardFooter>
      </Card>
    </div>

    <div className="flex justify-center mt-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Todo List App</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Input + Button */}
          <div className="flex gap-2">
            <Input
              placeholder="Enter a todo"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <Button onClick={addTodo}>Add</Button>
          </div>

          {/* Todo List */}
          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-3"
              >
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                />
                <span
                  className={`${
                    todo.completed
                      ? "line-through text-muted-foreground"
                      : ""
                  }`}
                >
                  {todo.text}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>

    </>
  )
}

export default App;
