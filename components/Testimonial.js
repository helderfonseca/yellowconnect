import Image from "next/image";
import TestimonialItem from "./TestimonialItem";

export default function Testimonials() {

    const profile = '/profile.jpg';

    return(
        <section className="mt-28">
            <h3 className="text-3xl font-bold text-center">Testemunho de clientes</h3>
            <div className="flex md:flex-row flex-col justify-center items-center gap-8 mt-8 pl-20">
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
            </div>
        </section>
    );
}