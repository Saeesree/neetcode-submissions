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
        if(!this.cache.get(key)) return -1;
        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,val);
        return val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            this.cache.delete(key);
        }else if(this.cache.size === this.capacity){
            const firstValue = this.cache.keys().next().value
            this.cache.delete(firstValue);
        }
        this.cache.set(key,value);
    }
}
