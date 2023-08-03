package com.codecool.photobox_backend.repository;

import com.codecool.photobox_backend.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
  @Query(
          nativeQuery = true,
          value = "select * from comments where image_id = ?1"
  )
  Set<Comment> getAllByImageId(UUID imageId);
}
