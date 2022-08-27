import { useAppContext } from "../store/store"
import Layout from "../components/layout";
import Item from "../components/item";

export default function Index(){

    const store = useAppContext();

    const itemsContainer = {  // CSS in JS
        display:"flex",
        flexWrap: "wrap",
        gap:"10px"


    }


    return(
        <Layout>
            <div style={itemsContainer}>
               {store.items.map(item => <Item key={item.id} item={item} />)}
            </div>
        </Layout>
    )
}