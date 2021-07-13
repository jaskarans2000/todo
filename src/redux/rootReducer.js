let initialState = {
    tasks: [],
}
function rootReducer(state = initialState, action) {
    
    switch (action.type) {
        case "add_task":
            let newObject = {
                tasks: [...state.tasks,action.payload],
            }
            return newObject;
        
        case "delete_task":
            let ntasks=[...state.tasks];
            ntasks=ntasks.filter((val,idx)=>{
                return idx!=action.payload;
            })
            return {
                tasks:ntasks
            }

        default:
            return state;
    }
}
export default rootReducer;