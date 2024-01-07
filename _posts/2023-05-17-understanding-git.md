---
layout: post
title: Understanding Git
subtitle: Working with Remotes and GitHub
date: 2023-05-17
---

Welcome to the next installment of my git fundamentals series. If you just landed here and are unsure if you should start here, check out [part one]({% post_url 2023-05-07-intro-to-git-for-beginners %}) where I discuss git in a broader sense.

As you continue to work with Git, you will likely find the need to collaborate with other developers or store your code remotely. Git provides a simple and effective way to do this through the use of remotes. In this article, we will explore the basics of working with remotes in Git, as well as introduce you to the popular online platform for collaborating on code, GitHub.

## What is a Remote in Git?

In Git, a remote is a version of your repository that is hosted somewhere else. This can be on a different computer or on a remote server, like GitHub. By working with a remote repository, you can share code with other developers, keep a backup of your code, and collaborate on projects with ease.

## Creating a Remote in Git

To create a remote in Git, you can use the git remote add command followed by the URL of the remote repository. For example, to add a remote called "origin" with the URL "https://github.com/wesleyem/hello.git", you would run the following command:

```zsh
git remote add origin https://github.com/wesleyem/hello.git
```

This creates a remote named "origin" that points to the repository at the given URL.

## Pushing and Pulling Changes with Git

Once you have a remote set up, you can push changes to the remote repository using the git push command. For example, to push the changes from your local "master" branch to the "origin" remote, you would run the following command:

```zsh
git push origin master
```

Similarly, to pull changes from the remote repository to your local repository, you can use the git pull command. For example, to pull changes from the "origin" remote into your local "master" branch, you would run the following command:

```zsh
git pull origin master
```

## Working with GitHub

GitHub is a popular online platform for hosting and collaborating on code. It allows you to create and host remote repositories, collaborate with other developers, and manage your codebase with ease.

To get started with GitHub, you first need to create an account. Once you have an account, you can create a new repository by clicking the "New" button on the home page. You will then be prompted to enter the details of your repository, including the name, description, and whether it should be public or private.

Once you have created a repository on GitHub, you can clone it to your local machine using the git clone command followed by the repository URL. For example, to clone a repository with the URL "https://github.com/wesleyem/hello.git", you would run the following command:

```zsh
git clone https://github.com/wesleyem/hello.git
```

This will create a local copy of the remote repository on your machine.

## Conclusion

Working with remotes in Git is an essential skill for collaborating on code with other developers and storing your code remotely. GitHub is a popular platform for hosting and collaborating on code, and it integrates seamlessly with Git. By understanding the basics of working with remotes in Git and using GitHub, you can efficiently collaborate on projects and manage your codebase with ease. In the [next article]({% post_url 2023-05-21-git-workflow %}) in this series, we'll cover the git workflow and some best practices for a smooth development process.
