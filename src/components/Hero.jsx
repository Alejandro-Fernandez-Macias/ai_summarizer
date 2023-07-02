import { logo, logo2 } from "../assets";

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo2} alt="sumz_logo"
                className="w-40 object-contain"/>

                <button type="button"
                    onClick={() =>window.open('https://github.com/Alejandro-Fernandez-Macias/ai_summarizer')}
                    className="black_btn">
                        Github
                </button>
            </nav>

            <h1 className="head_text">
                Summarize Articles with <br className="max-md:hidden"/> <span className="orange_gradient">Super Summz</span><br/>
                powered by <br/>
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Simplify your reading with Super Summz, an open-source article summarizer that transforms lenghty articles into clear and concise summaries
            </h2>
        </header>
    )
}

export default Hero