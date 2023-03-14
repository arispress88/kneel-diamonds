import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const buildOrderListItem = (customOrder) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    

    const foundMetal = metals.find(
    (metal) => {
        return metal.id === customOrder.metalId
    }
    
    )
    
    const foundSize = sizes.find(
        (size) => {
            return size.id === customOrder.sizeId
        }
)

const foundStyle = styles.find(
    (style) => {
        return style.id === customOrder.styleId
    }
)
const totalCost = foundMetal.price + foundSize.price + foundStyle.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})


    return `<li>
    Order #${customOrder.id} cost ${costString}
</li>`
}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

