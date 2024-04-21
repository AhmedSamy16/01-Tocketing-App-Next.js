"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import RadioInput from "./RadioInput";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  onSubmit: SubmitHandler<Ticket>;
  defaultTicket?: Ticket;
};

const TicketForm = ({ title, onSubmit, defaultTicket }: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Ticket>({
    defaultValues: defaultTicket ?? {
      category: "",
      description: "",
      priority: 1,
      progress: 0,
      status: "not-started",
      title: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      router.push("/");
    }
  }, [isSubmitSuccessful]);

  return (
    <div className="flex justify-center py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 lg:w-1/2 md:w-[70%] w-[80%]"
      >
        <h3 className="text-center">{title}</h3>

        <Input
          info={register("title", {
            required: "Title is required",
          })}
          error={errors.title?.message}
        />
        <Input
          isTextArea
          info={register("description", {
            required: "Description is required",
          })}
          error={errors.description?.message}
        />

        <Input
          info={register("category", {
            required: "Category is required",
          })}
          error={errors.category?.message}
        />

        <div className="mt-4">
          <label>Priority:</label>
          <div className="flex justify-between items-center">
            <RadioInput
              id="priority-1"
              info={register("priority")}
              value="1"
              isChecked={watch("priority") == 1}
            />
            <RadioInput
              id="priority-2"
              info={register("priority")}
              value="2"
              isChecked={watch("priority") == 2}
            />
            <RadioInput
              id="priority-3"
              info={register("priority")}
              value="3"
              isChecked={watch("priority") == 3}
            />
            <RadioInput
              id="priority-4"
              info={register("priority")}
              value="4"
              isChecked={watch("priority") == 4}
            />
            <RadioInput
              id="priority-5"
              info={register("priority")}
              value="5"
              isChecked={watch("priority") == 5}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="progress">Progress: {watch("progress")}%</label>
          <input
            type="range"
            id="progress"
            {...register("progress", {
              valueAsNumber: true,
              min: 0,
              max: 100,
            })}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="status">Status:</label>
          <select id="status" {...register("status")}>
            <option value="not-started">Not Started</option>
            <option value="pending">Pending</option>
            <option value="done">Done</option>
          </select>
        </div>

        <input
          type="submit"
          className="btn mt-4"
          value={isSubmitting ? "Loading..." : title}
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default TicketForm;
