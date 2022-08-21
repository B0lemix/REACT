import React from "react"
import StylesLoading from './loading.module.css'

export default function Loading(){

    return(
        <div className={StylesLoading.loadingContainer}>
            <div className={StylesLoading.loader}>
                <div>

                </div>
            </div>
        </div>

    )

}