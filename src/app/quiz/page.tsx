import Link from "next/link";
import { Quiz } from "./[id]/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const QuizList = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/quiz`, {
    next: { revalidate: 30 },
  });
  const quizData: Quiz[] = await res.json();
  return (
    <div className="mx-auto max-w-7xl py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {quizData.map((data) => (
          <Card
            key={data.id}
            className="flex flex-col gap-x-4 justify-between p-4"
          >
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{data.description}</p>
            </CardContent>
            <Link legacyBehavior passHref href={`/quiz/${data.id}`}>
              <Button className="mb-4">Take Quiz!</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuizList;
