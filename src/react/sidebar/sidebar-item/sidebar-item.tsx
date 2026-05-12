import { useNavigate } from "react-router";
import "./sidebar-item.css"

type SidebarItemProperties = {
    title: string,
    path: string
}

export function SidebarItem({title, path}: SidebarItemProperties)
{
    let navigate = useNavigate();
    const navigateToPath = () => {
        navigate(path)
    }

    return (
        <div className={`sidebar-item ${location.pathname === path ? "selected" : ""}`} onClick={navigateToPath}>{title}</div>
    )
}