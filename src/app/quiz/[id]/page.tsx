import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export interface Quiz {
  id: string;
  title: string;
  description?: string;
}
const QuizDetail = async ({ params }: { params: { id: string } }) => {
  const data = await fetch(`http://localhost:8000/api/quiz/${params.id}`, {
    next: { revalidate: 30 },
  });
  const quiz: Quiz = await data.json();
  return (
    <>
      <div className="max-w-6xl mx-auto py-12">
        <Card>
          <CardHeader>
            <CardTitle>{quiz.title}</CardTitle>
          </CardHeader>
          <CardContent>{quiz.description}</CardContent>
          
        </Card>
      </div>
    </>
  );
};

export default QuizDetail;
