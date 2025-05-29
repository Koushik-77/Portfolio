import myImg from "../images/chef-claude-icon.png";
export default function Header() {
    return(
        <>
            <header>
                <img src={myImg} alt="Cluade Chef Logo"/>
                <h1>Chef Cluade</h1>
            </header>
        </>
    )
}