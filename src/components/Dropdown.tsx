import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

interface IProps {
    onChange?: Function
    values: string[]
    defaultValue: string
    className?: string
}

const DropdownSummary = styled.summary`
    position: relative;
    display: flex;
    align-items: center;
    color: #222222;
    background-color: #F5F8FA;
    border-radius: 80px;
    padding: 6px 16px;
    font-size: 14px;
    transition: all .15s;
    cursor: pointer;
    &::marker { content: '' }

    &::after {
        content: '';
        display: inline-block;
        height: 24px;
        width: 24px;
        background-image: url('/arrow.svg');
        transform: rotate(180deg);
        margin-left: 8px;
    }
`;

const DropdownDetails = styled.details`
    position: relative;

    &[open] > summary::after {
        transform: rotate(0deg);
    }

    &[open] > summary {
        background-color: #E1E4E7;
    }
`;

const Options = styled.div`
    position: absolute;
    top: 110%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 6px;
    border-radius: 8px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
    z-index: 69;

    & > span {
        display: block;
        padding: 12px 8px;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
        padding-right: 45px;
        min-width: max-content;

        &:hover {
            background-color: #F5F8FA;
        }
    }
`;

export default function Dropdown(props: IProps) {

    const [active, setActive] = useState(props.defaultValue);
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(item: string) {
        setActive(item)
        setIsOpen(false)
        props.onChange && props.onChange(); 
    }

    const dropdownRef = useRef(null);

    useEffect(() => {
        function handler(e: MouseEvent) {
            const elem = e.target as HTMLElement;
            if (!elem.classList.contains('dropdown-option')) {
                setIsOpen(false);
            }
        }

        dropdownRef.current && document.addEventListener('click', handler)

        return () => document.removeEventListener('click', handler)
    }, [dropdownRef.current])

    return (
        <DropdownDetails ref={dropdownRef} open={isOpen}>
            <DropdownSummary 
            className="dropdown-option"
            onClick={e => {
                e.preventDefault()
                setIsOpen(!isOpen)
            }}>{active}</DropdownSummary>
            <Options>
                {
                    props.values.map((item, i) => {
                        return (
                            <span
                            className="dropdown-option" 
                            onClick={_ => handleClick(item)}
                            key={item+i}>{item}</span>
                        )
                    })
                }
            </Options>
        </DropdownDetails>
    )
}