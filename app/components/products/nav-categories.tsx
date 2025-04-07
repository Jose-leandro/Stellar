import React from 'react'


export default function NavGategories(categories: object): React.JSX.Element {
    return (
        <>
            {
                Object.values(categories).map(({ nameOfCategorie }, index) => {
                    <>
                        <span> {nameOfCategorie} </span>
                        <span> `{" > "}` </span>
                    </>
                })
            }
        </>
    )
}