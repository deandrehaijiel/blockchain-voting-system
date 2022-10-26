import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Blockchain = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="Blockchain" id="Blockchain">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="Blockchain-bx wow zoomIn">
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>What is Blockchain?</h2>
                        <br></br>
                        <p>Blockchain is a system for storing data in a way that makes any system changes, hacking, and cheating difficult or impossible. A blockchain is essentially a network of computer systems that duplicates and distributes a digital ledger of transactions across the entire network. Blockchain technology has a different user with a network node that maintains a copy of the ledger of every transaction carried out. This technology verifies every transaction on the blockchain database without the need for any trusted third parties or users to participate in the system. This technology has helped in creating high expectations since every transaction is carried out in a decentralized way. So in simple words, blockchain is a computer system that is being maintained and trusted by a lot of entities.</p>
                        <h2>History and Use of Blockchain</h2>
                        <br></br>
                        <p>Stuart Haber and W. Scott Stornetta, two researchers deeply invested in implementing a system where document timestamps could not be altered, initially proposed the concept of blockchain technology in 1991. But blockchain did not have its first practical use until over two decades later, with the introduction of Bitcoin in January 2009, enabling a decentralized, borderless, and trustless exchange of value without the bank or other middleman. Blockchain has revolutionized money and is currently revolutionizing several sectors by introducing a new concept called "digital trust." Bitcoin's anonymous founder, Satoshi Nakamoto, described the digital currency as "a new electronic cash system that's peer-to-peer, with no trusted third party" in a research paper introducing it. The key difference to remember is that blockchain may theoretically be used to immutably store any amount of data points, but Bitcoin only utilizes it to transparently record a ledger of payments. As discussed above, this could be in the form of transactions, votes in elections, goods inventories, state identifications, deeds to properties, and much more.</p>
                        <p>Blockchain 1.0 is a distributed ledger for recording and transferring extremely secure value. Ethereum created the groundwork for blockchain 2.0, the second generation of technology that not only allows for money transfers but also the execution of smart contracts to create decentralized apps. This adaptability allowed Decentralized Finance (Defi) to expand in a new direction and include use cases including lending, borrowing, staking, and yield farming.</p>
                        <p>Businesses and organizations have started to utilize blockchain technology because they perceive a huge possibility to save costs and enhance specific business operations. Surprisingly, established financial institutions are mostly driving adoption as they look to streamline their procedures for cross-border payments and settlements.</p>
                        <p>Smart Contracts are introduced by the Ethereum blockchain system. Simple instructions typed into code on a blockchain are followed by Smart Contracts to function. When predefined circumstances have been verified to have been met, a network of computers will carry out the actions. When the transaction is finished, the blockchain is then updated. As a result, the transaction cannot be modified, and only parties to whom permission has been granted can view the outcome.</p>
                        <p>Bitcoin was designed to function much like physical cash in that payments could be made peer-to-peer without the requirement for a central bank or other administrative body to run and maintain the ledger.</p>
                        <p>In addition the use of blockchain technology to establish voting rights. Furthermore, voting fraud can be avoided, and it will be impossible for anyone to vote more than once and make voting as simple as pressing a few buttons on a smartphone.</p>
                        <h2>Usage of Blockchain</h2>
                        <br></br>
                        <p>There are many applications of blockchain in the modern world today with the most common being in cryptocurrencies such as bitcoin and ethereum. However, the scope of blockchain goes beyond this and has been widely touted for its potential to transform entire industries.</p>
                        <p>Blockchain has revolutionized the banking and finance sector and has certainly brought about the most benefits and convenience to our lifestyles. Before the implementation of blockchain, financial institutions only operated during business hours, from Monday to Friday. This means that if you deposit a check, you will only see the money reach your bank account on Monday earliest. Even if you decide to deposit your check on a business day, the transaction can take a few days to be verified. However, with the implementation of blockchain, consumers can see their transactions processed in as little as 10 minutes without having to worry about the transaction volume as well. This service is readily available around the clock regardless of holidays or time or week of the day.</p>
                        <p>Blockchain has also benefited other sectors as well such as healthcare. Healthcare providers can leverage blockchain to securely store patient's medical records which can be encoded such that it is only accessible by the relevant person in charge to preserve their privacy. Blockchain also allows patients' records to be final and not altered by higher authorities for malicious intent.</p>
                        <p>One area where blockchain has not been widely adopted would be voting, which has the potential to eliminate election fraud and make the voting process a fair one. Voting on the blockchain would be a fair and transparent process as it makes it impossible for third parties to tamper with the votes. The outcome of the elections would also be accurate and instant using blockchain thereby eliminating human errors and manpower for counting. All in all, it will expedite the process of voting.</p>
                        <h2>Aim of Project</h2>
                        <br></br>
                        <p>Our aim for this project would be to create a blockchain voting system that can be implemented for modern-day voting and we plan on using python3 as our main coding language.</p>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
