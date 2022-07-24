const Dropdown = (props) => {

    const {changeMenuValue} = props

    return (
    <nav className="navbar">
        <h1>Up2You Food</h1>
        <select className="menu" onChange={changeMenuValue}>
            <option value={"all-menu"}>All menu</option>
            <option value={"ผัด-ทอด"}>ผัด-ทอด</option>
            <option value={"แกง-ต้มยำ"}>แกง-ต้มยำ</option>
            <option value={"เครื่องดื่ม"}>เครื่องดื่ม (ชา กาแฟ นม)</option>
            <option value={"สเต็ก"}>สเต็ก</option>
        </select>
    </nav>
    )
}

export default Dropdown;