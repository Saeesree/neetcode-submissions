class MyHashMap {
    constructor() {
        this.object = {}
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.object[key] = value;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.object.hasOwnProperty(key)){
            return this.object[key]
        }
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.object[key]
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
