import { Props } from "../interfaces/AppInterfaces";

export const List = ({ subs }: Props) => {
    const renderList = (): JSX.Element[] => {
        return subs.map((sub) => {
            return (
                <li key={sub.nick}>
                    <img src={sub.avatar} alt="avatar" />
                    <h3>
                        {sub.nick} (<small>{sub.subMonths}</small>)
                    </h3>
                    <p>{sub.description?.substring(0, 100)}</p>
                </li>
            );
        });
    };

    return <ul>{renderList()}</ul>;
};
