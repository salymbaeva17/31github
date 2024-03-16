class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        return this.collection.length;
    }
    pageCount() {
        return parseInt(this.collection.length/this.itemsPerPage)+(this.collection.length%this.itemsPerPage>0?1:0);
    }
    pageItemCount(pageIndex) {
        return this.pageCount()<=pageIndex || pageIndex < 0? -1 : (this.pageCount()-1!=pageIndex ? this.itemsPerPage : (this.collection.length%this.itemsPerPage>0?this.collection.length%this.itemsPerPage:this.itemsPerPage));
    }
    pageIndex(itemIndex) {
        return itemIndex < 0 || itemIndex >= this.itemCount() ? -1 : parseInt(itemIndex/this.itemsPerPage);
    }
}
const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const helper = new PaginationHelper(collection, 10)

console.log(helper.pageItemCount(2))
console.log(helper.itemCount())
