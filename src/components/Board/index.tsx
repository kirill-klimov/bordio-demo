import styled from 'styled-components'
import { boards } from './data'
import { ReactComponent as PlusSvg } from '../../assets/plus.svg'

const Task = styled.div`
    padding: 15px;
    border-radius: 8px;
    ${props => `background-color: ${props.color};`}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 15px;
    gap: 10px;
    width: 270px;
    font-size: 14px;
    margin-bottom: 10px;
    cursor: pointer;

    & > span:last-child {
        color: rgba(67, 94, 82, 1);
        font-size: 13px;
    }
`;

const ColumnContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    border-right: 1px solid rgba(243, 243, 243, 1);
`;

const ColumnHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(243, 243, 243, 1);

    & > h4 {
        font-weight: 500;
        font-size: 14px;
    }

    & > span {
        display: block;
        color: rgba(140, 147, 159, 1);
        background-color: rgba(232, 235, 239, 1);
        border-radius: 100px;
        padding: 2px 9px;
        margin-left: 10px;
    }
`; 

const TaskList = styled.div`
    padding: 20px 10px;
    border-right: 1px solid rgba(243, 243, 243, 1);
    
    &:last-of-type {
        /* border-right: none; */
    }
`;

const BoardContainer = styled.div`
    overflow-x: scroll;
    margin-bottom: 1px;
    display: flex;
    padding-top: 16px;

    &::-webkit-scrollbar {
        height: 5px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-color: gray;
    }
`;

const CreateColumnHeader = styled.div`
    padding: 14.5px 20px;
    font-size: 14px;
    min-width: 270px;
    border-bottom: 1px solid rgba(243, 243, 243, 1);
    & > span {
        color: rgba(140, 147, 159, 1);
    }
`;

const Column = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr;
`;

export default function Board() {
    return (
        <BoardContainer>
            <ColumnContainer>
                {
                    boards.map((board, i) => {
                        return (
                            <Column key={board.name + i}>
                                <ColumnHeader>
                                    <h4>{board.name}</h4>
                                    <span>{board.tasks.length}</span>
                                </ColumnHeader>
                                <TaskList>
                                    {
                                        !board.tasks?.length ? <></> :
                                        board.tasks?.map((task, i) => {
                                            return (
                                                <Task key={task.name + i} color={task.color}>
                                                    <span>{task.name}</span>
                                                    <span>{task.duration}</span>
                                                </Task>
                                            )
                                        })
                                    }
                                </TaskList>
                            </Column>
                        )
                    })
                }
            </ColumnContainer>
            <div>
                <CreateColumnHeader className='flex items-center'>
                    <PlusSvg fill='rgba(140, 147, 159, 1)' />
                    <span>Create status</span>
                </CreateColumnHeader>
            </div>
        </BoardContainer>
    )
}