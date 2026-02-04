import HeroFruit from "@/public/under-construction.png";

export default function OrderPage() {
    return (
        <div className="min-h-screen mt-6">
            <main className="min-h-screen flex flex-col items-center justify-center text-center">
                   order page
                <p className="mb-6 text-lg font-semibold">
                 
                    ESTA PAGINA ESTA EN CONSTRUCCION :)
                </p>

                <img
                    src={HeroFruit.src}
                    alt="Hero Fruit"
                    className="w-100 h-auto"
                />

            </main>
        </div>
    );
}
