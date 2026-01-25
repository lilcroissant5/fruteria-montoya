import HeroFruit from "@/public/edgar.jpeg";

export default function HistoryPage() {
    return (
        <div className="min-h-screen mt-6">
            <main className="min-h-screen flex flex-col items-center justify-center text-center">
                 history page
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
