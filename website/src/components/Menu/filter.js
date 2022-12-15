import {useEffect} from "react";

function Filter(){
    return (
        <div className="filter-container">
            <button>
                All
            </button>
            <button>
                Vegetarian
            </button>
                <button>
                Seafood
                </button>
        </div>
    )
}

export default Filter;