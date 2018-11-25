/**
 * Return node(s) with the given data-test attribute.
 * @param {*} wrapper 
 * @param {*} val 
 */
export const findByTestAttr = (wrapper,val) => {
    return wrapper.find(`[data-test="${val}"]`);
}