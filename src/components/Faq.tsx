import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ChevronDown } from "lucide-react";
import { FaQuestion } from "react-icons/fa";

export default function SimpleAccordion() {
  const questions = [
    {
      id: 1,
      title: "Quais formas de pagamento são aceitas?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque iure aspernatur in magnam necessitatibus vel quis sequi tenetur consequatur quod autem odit error deleniti impedit labore rem, officiis architecto.",
    },
    {
      id: 2,
      title: "Como posso cancelar a minha matrícula?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque iure aspernatur in magnam necessitatibus vel quis sequi tenetur consequatur quod autem odit error deleniti impedit labore rem, officiis architecto.",
    },
    {
      id: 3,
      title: "Qual a idade mínima para se matricular?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque iure aspernatur in magnam necessitatibus vel quis sequi tenetur consequatur quod autem odit error deleniti impedit labore rem, officiis architecto.",
    },
    {
      id: 4,
      title: "As unidades possuem armários?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque iure aspernatur in magnam necessitatibus vel quis sequi tenetur consequatur quod autem odit error deleniti impedit labore rem, officiis architecto.",
    },
  ];

  return (
    <section className="relative mx-auto my-20 w-1/3">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <FaQuestion
          size={900}
          color="#1313160D"
          className="absolute -left-1/4"
        />
        <h2 className="mb-10 text-center text-6xl font-bold">FAQ</h2>
        {questions.map((question) => (
          <Accordion key={question.id} sx={{ my: "1rem", p: "1rem" }}>
            <AccordionSummary
              expandIcon={
                <ChevronDown color="white" className="rounded-full bg-black" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: "700", fontSize: "1.1rem" }}>
                {question.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.text}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
