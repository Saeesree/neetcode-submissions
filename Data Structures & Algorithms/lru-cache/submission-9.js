class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.get(key))return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.get(key)){
            this.cache.delete(key);
            this.cache.set(key, value);
        }else if(this.cache.size === this.capacity){
            let firstValue = Array.from(this.cache.keys())[0]
            this.cache.delete(firstValue);
            
        }
        this.cache.set(key, value);
    }
}
