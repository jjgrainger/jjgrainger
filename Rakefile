require 'fileutils'
require 'highline/import'

desc "Create a new post"
task :new do
    # Ask for the post title
    @name = ask "Title? "

    # Use title to createa a slug
    @slug = @name.downcase.strip.gsub(' ', '-')

    # Prompt for slug with default
    @slug = ask("Slug? ") { |q| q.default = @slug }

    # Ask for the date, use todays date as default
    @date = ask("Date? |#{Date.today}| ") { |q| q.default = Date.today }

    # Create file from date and slug
    @file = "_posts/#{@date}-#{@slug}.md"

    # Create the file and add contents
    FileUtils.touch(@file)
    open(@file, 'a') do |file|
      file.puts "---"
      file.puts "layout: post"
      file.puts "title: #{@name}"
      file.puts "date: #{@date}"
      file.puts "---"
    end

    puts "Success! New post created at #{@file}"
end

desc "Run the server"
task :serve do
    # Run jekyll serve command
    exec "bundle exec jekyll serve --future"
end
