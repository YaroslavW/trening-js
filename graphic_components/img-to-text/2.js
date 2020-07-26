/** 
 * Created by Ruanyu Jian
 */  
var map=getCharsMap();  

function toChars(context, width, height, rowChars) {  
    var pixels = [],  
        output = "",  
        imageData = context.getImageData(0, 0, width, height),  
        rowChars = width < rowChars ? width : rowChars,  
        char_h = width / rowChars,  
        char_w = char_h,  
        rows = height / char_h,  
        cols = rowChars,  

        getBlockGray = function (x, y, w, h) {  
            var sumGray = 0, pixels;  
            for (var row = 0; row < w; row++) {  
                for (var col = 0; col < h; col++) {  
                    var cx = x + col,   
                        cy = y + row,   
                        index = (cy * imageData.width + cx) * 4,  
                        data = imageData.data,  
                        R = data[index],  
                        G = data[index + 1],  
                        B = data[index + 2],  
                        gray = ~~(R * 0.3 + G * 0.59 + B * 0.11);  
                    sumGray += gray;  
                }  
            }  
            pixels = w * h;  
            return ~~(sumGray / pixels);  
        };  
    for (var r = 0; r < rows; r++) {  
        for (var c = 0; c < cols; c++) {  
            var pos_x = ~~(c * char_h),  
                pos_y = ~~(r * char_h),  
                avg = getBlockGray(pos_x, pos_y, ~~char_w, ~~char_h),  
                ch = map[avg];  
            output += ch;  
        }  
        output += 'rn';  
    }  
    ;  
    return output;  
}  
function getCharsMap() {  
    var chars = ['@', 'w', '#', '$', 'k', 'd', 't', 'j', 'i', '.', ' '];  
    var step = 25,  
        map = {};  
    for (var i = 0; i < 256; i++) {  
        var index = ~~(i / 25)  
        map[i] = chars[index];  
    }  
    ;  
    return map;  
}