import React, { memo } from "react";

const ChildTest = () => {
    console.log('render childtest')
    return (
        <div>child</div>
    )
}

export default memo(ChildTest)