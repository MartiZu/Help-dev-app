"use client";
const url = "https://help-dev-data.onrender.com/";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTicketForm() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [room, setRoom] = useState("");
  const [status, setStatus] = useState("open");

  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();

    const newTicket = {
      author,
      title,
      description,
      room,
      status,
    };

    const response = await fetch(`${url}tickets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    });

    if (response.ok) {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center lg:w-1/2"
      onSubmit={submitForm}
    >
      <div className="bg-gray-100 w-full max-w-4xl p-4 text-2xl rounded-md">
        <h1 className="text-center mb-6 text-5xl">New ticket form</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 flex flex-col justify-center lg:pr-4 mb-4 lg:mb-0">
            <label className="mb-4 flex flex-col lg:flex-row items-center lg:items-start gap-3">
              Author
            </label>
              <input
                className="text-base h-8 px-3 rounded mb-4 mx-4"
                type="text"
                required
                placeholder="Tell us your name"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            <label className="mb-4 flex flex-col lg:flex-row items-center lg:items-start gap-3">
              Title
            </label>
              <input
                className="text-base h-8 px-3 rounded mb-4 mx-4"
                type="text"
                required
                placeholder="Tell us the title of your problem"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            <label className="mb-4 flex flex-col lg:flex-row items-center lg:items-start gap-3">
              Room
            </label>
              <input
                className="text-base h-8 px-3 rounded mb-4 mx-4"
                type="text"
                required
                placeholder="Your room number"
                name="room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
          </div>
          <div className="lg:w-1/2">
            <textarea
              className="w-full h-40 lg:h-full text-base rounded p-2"
              required
              placeholder="Tell us about a problem"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-green-600 text-white mb-4 py-3 px-9"
          >
            Submit!
          </button>
        </div>
      </div>
    </form>
  );
}
