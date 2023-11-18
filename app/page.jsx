import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Loz from "./loz.png";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className=" relative items-left justify-between p-24 bg-text-primary">
        <h1 className="text-white text-6xl font-bold pb-2">Help Dev</h1>
        <div className="absolute left-0 w-[22rem] h-2 bg-blue-500"></div>
        <p className="text-white pt-8 text-xl">
          In the whimsical realm of code, where keyboards clatter like enchanted
          typewriters, and bugs scurry away at the sight of a debugger, the wise
          Aladdin of Development once said, Seek ye the lamp of wisdom, but
          tread lightly on the magic carpet of Stack Overflow. For in the vast
          desert of coding conundrums, one may stumble upon the Cave of Helpful
          Genies. Yet, be wary, my friend, for not all genies grant three
          wishes, and some may jest with riddles written in the cryptic language
          of JavaScript.
        </p>
        <Link className="hover:underline" href="/addTicket">
          <button className="bg-green-600 mt-4 py-3 px-8 text-white">
            Add Ticket
          </button>
        </Link>
      </div>

      <div>
        <div className="py-8 px-24 flex items-center gap-4">
          <Image src={Loz} alt="Dojo" width={150}></Image>
          <h2 className="text-4xl pb-4">How to ask for help:</h2>
        </div>
      </div>
      <div className="mb-8">
        <ul className="flex flex-col px-24 lg:text-xl">
          <li className="pb-4">
            <span className="font-bold">Clearly state the problem:</span>{" "}
            Behold, O Code Alchemist, the art of unraveling conundrums! Begin
            thy quest by crafting a proclamation of the digital enigma thou
            facest. Let not ambiguity cloud thy message; instead, wield the
            sword of specificity and illuminate the ether with a clear depiction
            of the bug-ridden dragon thou seeketh to conquer.
          </li>
          <li className="pb-4">
            <span className="font-bold">Provide context:</span> Inscribe the
            parchment with the backstory of thy coding odyssey. Describe the
            enchanted realms of frameworks and libraries thou dost traverse.
            Unveil the tapestry of technologies that adorn thy noble project.
            Yet, beware, for too much detail may summon the labyrinthine genie
            of confusion—strike a balance, and let context be thy ally.
          </li>
          <li className="pb-4">
            <span className="font-bold">Show your code: </span> Display thy
            incantations, encapsulated within the sacred code blocks. Cast aside
            the extraneous spells and unveil only the mystic lines that summon
            the elusive bug. Let syntax and indentation dance harmoniously, for
            clarity is the key to unlocking the magic hidden within the script.
          </li>
          <li className="pb-4">
            <span className="font-bold">Explain what you have tried: </span>
            Declare the feats thou hast undertaken in the face of adversity.
            Share the chronicles of thy research, recount the amendments made to
            the spellbook of code, and reveal the mystic rituals thou hast
            performed. Let the troubleshooters know that thou art not idle, but
            a valiant seeker of solutions.
          </li>
          <li className="pb-4">
            <span className="font-bold"> Ask a specific question: </span> Pose a
            question as precise as the arrow of a skilled archer. Avoid the
            temptation to unleash a barrage of queries; instead, channel the
            wisdom of a wise oracle and seek guidance on the most pivotal aspect
            of thy quest. A focused question shall be the beacon that guides
            thee through the stormy sea of assistance.
          </li>
          <li className="pb-4">
            <span className="font-bold">Provide additional information: </span>
            Augment thy missive with supplementary artifacts the screenshots of
            the enchanted screen, the elixir of sample data, or any mystical
            artifacts that may aid in divining the elusive answer. Let not thy
            information be scant, but neither should it overflow like an
            unchecked cauldron.
          </li>
          <li className="pb-4">
            In weaving this enchanting tapestry of thy coding quandary,
            remember, O Seeker of Solutions, humor be thy ally, for a chuckle
            shared is a spell cast upon the shadows of debugging despair!
          </li>
        </ul>
      </div>
    </main>
  );
}
