import { useRouter } from "next/router";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: rgb(59 130 246);
`;

export default function Button({
    txt = "Default",
    onBtnClick = () => { },
}) {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-1.5 px-4 rounded-md transition-all "
            onClick={(e) => onBtnClick(e)}
        >{txt}</button>
    )
}
