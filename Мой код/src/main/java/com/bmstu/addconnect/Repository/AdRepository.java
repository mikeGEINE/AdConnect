package com.bmstu.addconnect.Repository;

import com.bmstu.addconnect.Ad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdRepository extends JpaRepository<Ad, Integer> {
}
