var gulp=require('gulp');
var uglify=require('gulp-uglify');
var server=require('gulp-webserver');
var sass=require('gulp-sass');
gulp.task('sass',function(){
	gulp.src('scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
})
gulp.task('compress',function(){
	gulp.src('js/js.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
})
gulp.task('server',['start'],function(){
	gulp.src('./')
		.pipe(server({
			port:8989,
			livereload: true,
			directoryLIstening:true,
			open:true
		}))
})
gulp.task('start',function(){
	gulp.watch('index.html');
	gulp.watch('scss/*.scss',['sass']);
	gulp.watch('js/js.js',['compress']);
})